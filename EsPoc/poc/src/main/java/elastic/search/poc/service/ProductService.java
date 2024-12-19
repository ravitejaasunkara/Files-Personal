package elastic.search.poc.service;

import elastic.search.poc.entity.Customer;
import elastic.search.poc.entity.Product;
import elastic.search.poc.repository.CustomerRepository;
import elastic.search.poc.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CustomerRepository customerRepository;

    public Iterable<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public Iterable<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }



}
