package elastic.search.poc.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(indexName = "customers")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Customer {
    @Id
    private int id;
    private String firstname;
    private String lastname;
    private String email;
    private String profession;
    private String phoneNumber;
}
