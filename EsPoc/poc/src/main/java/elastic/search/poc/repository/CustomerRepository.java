package elastic.search.poc.repository;

import elastic.search.poc.entity.Customer;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface CustomerRepository extends ElasticsearchRepository<Customer,Integer> {
}
