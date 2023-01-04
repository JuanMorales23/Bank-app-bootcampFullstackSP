package co.juan.bankappback.services;

import co.juan.bankappback.entities.Transaction;
import co.juan.bankappback.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionServiceImpl implements TransactionService{
    @Autowired
    TransactionRepository transactionRepository;
    @Override
    public Transaction createTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public Boolean deleteTransaction(int id) {
        return findById(id).map(transaction -> {
            transactionRepository.deleteById(id);
            return true;
        }).orElse(false);
    }

    @Override
    public Optional<Transaction> findById(int id) {
        return transactionRepository.findById(id);
    }

    @Override
    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }
}
