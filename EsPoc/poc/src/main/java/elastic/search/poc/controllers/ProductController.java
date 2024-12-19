package elastic.search.poc.controllers;

import co.elastic.clients.elasticsearch.core.SearchResponse;
import co.elastic.clients.elasticsearch.core.search.Hit;
import elastic.search.poc.entity.Customer;
import elastic.search.poc.entity.Product;
import elastic.search.poc.service.ElasticSearchService;
import elastic.search.poc.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/es")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ElasticSearchService elasticSearchService;

    @GetMapping("/all")
    public Iterable<Product> getAllProducts(){
        return productService.getProducts();
    }

    @PostMapping("/save")
    public void saveProduct(@RequestBody Product product){
        productService.saveProduct(product);
    }

    @GetMapping("/customers")
    public Iterable<Customer> getAllCustomers() {
        return productService.getAllCustomers();
    }

    @PostMapping("/savecustomer")
    public Customer saveCustomer(@RequestBody Customer customer) {
        return productService.saveCustomer(customer);
    }

    @GetMapping("/matchAll")
    public String matchAllQuery() throws IOException {
        SearchResponse<Map> searchResponse = elasticSearchService.matchAll();
        System.out.println(searchResponse);
        return searchResponse.hits().hits().toString();
    }

    @GetMapping("/matchAllProductsIndex")
    public List<Product> matchAllQueryProductsIndex() throws IOException {
        SearchResponse<Product> searchResponse = elasticSearchService.matchAllProductsIndex();
        System.out.println(searchResponse);
        List<Hit<Product>> hits = searchResponse.hits().hits();
        List<Product> products = new ArrayList<>();
        for(Hit<Product> prod: hits){
            products.add(prod.source());
        }
        return products;
    }

    @GetMapping("/matchAllCustomersIndex")
    public List<Customer> matchAllQueryCustomersIndex() throws IOException {
        SearchResponse<Customer> searchResponse = elasticSearchService.matchAllCustomersIndex();
        System.out.println(searchResponse);
        List<Hit<Customer>> hits = searchResponse.hits().hits();
        List<Customer> products = new ArrayList<>();
        for(Hit<Customer> prod: hits){
            products.add(prod.source());
        }
        return products;
    }

    @GetMapping("/search/{keyword}")
    public List<Product> getSearchResults(@PathVariable String keyword) throws IOException {
        SearchResponse<Product> response = elasticSearchService.searchByNameField("description", keyword);
        System.out.println("response : "+response);
        List<Hit<Product>> hits = response.hits().hits();
        List<Product> searchResponse = new ArrayList<>();
        for(Hit<Product> resp: hits){
            searchResponse.add(resp.source());
        }
        return searchResponse;
    }

    @GetMapping("/search/both/{searchTerm}")
    public List<Product> searchBothNameAndDescription(@PathVariable String searchTerm) throws IOException {
        SearchResponse<Product> response = elasticSearchService.searchByNameAndDescription("name", "description", searchTerm);
        List<Hit<Product>> hits = response.hits().hits();
        List<Product> searchResponse = new ArrayList<>();
        for(Hit<Product> i: hits){
            searchResponse.add(i.source());
        }
        return searchResponse;
    }
}
