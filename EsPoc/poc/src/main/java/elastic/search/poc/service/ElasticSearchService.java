package elastic.search.poc.service;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch._types.query_dsl.MatchQuery;
import co.elastic.clients.elasticsearch._types.query_dsl.Query;
import co.elastic.clients.elasticsearch.core.SearchResponse;
import elastic.search.poc.entity.Customer;
import elastic.search.poc.entity.Product;
import elastic.search.poc.utils.ElasticSearchUtil;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.index.query.MatchAllQueryBuilder;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.client.elc.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;

@Service
public class ElasticSearchService {
    @Autowired
    private ElasticsearchClient elasticsearchClient;

    @Autowired
    private ElasticsearchOperations elasticsearchOperations;

    public SearchResponse<Map> matchAll() throws IOException {
        Supplier<Query> supplier = ElasticSearchUtil.supplier();
        SearchResponse<Map> searchResponse = elasticsearchClient.search(s->s.query(supplier.get()).size(30),Map.class);
        System.out.println("match query"+supplier.get().toString());
        return searchResponse;
    }

    public SearchResponse<Product> matchAllProductsIndex() throws IOException {
        Supplier<Query> supplier = ElasticSearchUtil.supplier();
        SearchResponse<Product> products = elasticsearchClient.search(s -> s.index("products").query(supplier.get()).size(50), Product.class);
        System.out.println("match query"+supplier.get().toString());
        return products;
    }

    public SearchResponse<Customer> matchAllCustomersIndex() throws IOException {
        Supplier<Query> supplier = ElasticSearchUtil.supplier();
        SearchResponse<Customer> products = elasticsearchClient.search(s -> s.index("customers").query(supplier.get()).size(30), Customer.class);
        System.out.println("match query"+supplier.get().toString());
        return products;
    }

    public SearchResponse<Product> searchByNameField(String fieldName, String searchTerm) throws IOException {
        SearchResponse<Product> response = elasticsearchClient.search(s -> s
                .index("products")
                .query(q -> q
                        .match(t ->t
                                .field(fieldName)
                                .query(searchTerm)
                        )
                ),
                Product.class
        );
        return response;
    }

    public SearchResponse<Product> searchByNameAndDescription(String nameField, String descriptionField, String searchTerm) throws IOException {
        Query byName = MatchQuery.of(m -> m
                .field(nameField)
                .query(searchTerm)
        )._toQuery();

        Query byDescription = MatchQuery.of(m -> m
                .field(descriptionField)
                .query(searchTerm)
        )._toQuery();

        SearchResponse<Product> response = elasticsearchClient.search(s -> s
                .index("products")
                .query(q -> q
                        .bool(b -> b
                                .must(byName)
                                .must(byDescription)
                        )
                ),
        Product.class
        );
        return response;
    }

}
