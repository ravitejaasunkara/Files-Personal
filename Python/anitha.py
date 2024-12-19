import os
import requests
import json
import csv

# Fetch CVE data from the NVD API within a specific date range
def retrieve_cve_data():
    nvd_api_url = "https://services.nvd.nist.gov/rest/json/cves/2.0"
    query_params = {
        'pubStartDate': '2023-08-10T00:00:00.000',
        'pubEndDate': '2023-10-10T00:00:00.000',
    }
    response = requests.get(nvd_api_url, params=query_params)
    print("Received status code:", response.status_code)

    if response.status_code != 200:
        print(f"Failed to fetch data: {response.status_code} - {response.text}")
        return None

    return response.json()

# Save the filtered CVE data into a CSV file based on severity level
def export_cve_to_csv(cve_info, severity_filter):

    if not cve_info:
        print("No data available for saving.")
        return

    vulnerabilities = cve_info.get("vulnerabilities", [])

    with open('parsed_cve_data.csv', mode='w', newline='', encoding='utf-8') as csv_file:
        csv_writer = csv.writer(csv_file)
        csv_writer.writerow(['CVE ID', 'Published Date', 'Last Modified Date', 'Source Identifier', 'Description', 'Severity Level', 'Attack Vector'])

        for vulnerability in vulnerabilities:
            cve_details = vulnerability["cve"]
            # Check if the required cvssMetricV31 key exists before proceeding
            metrics = cve_details.get("metrics", {})
            cvss_metrics = metrics.get("cvssMetricV31", [])

            if cvss_metrics and cve_details["metrics"]["cvssMetricV31"][0]["cvssData"].get("baseSeverity", "").lower() == severity_filter.lower():

                if cve_details["vulnStatus"] not in ["Analyzed", "Modified"]:
                    continue

                cve_id = cve_details["id"]
                publish_date = cve_details["published"]
                modified_date = cve_details["lastModified"]
                source = cve_details["sourceIdentifier"]
                description = next((desc["value"] for desc in cve_details["descriptions"] if desc["lang"] == "en"), "No description available")
                
                metrics = cve_details.get("metrics", {})
                cvss_metrics = metrics.get("cvssMetricV31", [])
                
                base_severity = cvss_metrics[0]["cvssData"].get("baseSeverity", "Unknown") if cvss_metrics else "Unknown"
                attack_vector = cvss_metrics[0]["cvssData"].get("attackVector", "Unknown") if cvss_metrics else "Unknown"

                csv_writer.writerow([cve_id, publish_date, modified_date, source, description, base_severity, attack_vector])

# Main function for user input and data processing
def run_cve_program():
    severity_levels = {'Low': 'LOW', 'Medium': 'MEDIUM', 'High': 'HIGH', 'Critical': 'CRITICAL'}
    user_severity = input("Select a severity level (Low, Medium, High, Critical): ")
    severity_choice = severity_levels.get(user_severity.capitalize(), 'LOW')

    if os.path.exists('raw_cve_data.json'):
        load_existing = input("Do you want to load the existing raw CVE data file? (yes/no): ")
        if load_existing.lower() == 'yes':
            with open('raw_cve_data.json', 'r') as json_file:
                cve_info = json.load(json_file)
        else:
            cve_info = retrieve_cve_data()
    else:
        cve_info = retrieve_cve_data()

    if cve_info:
        with open('raw_cve_data.json', 'w') as json_file:
            json.dump(cve_info, json_file, indent=4)
        export_cve_to_csv(cve_info, severity_choice)

if __name__ == "__main__":
    run_cve_program()
