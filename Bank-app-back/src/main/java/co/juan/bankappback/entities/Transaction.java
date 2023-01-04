package co.juan.bankappback.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Date;
@Entity
@Data
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    @NotBlank
    private Date movementDate;
    @NotNull
    @NotBlank
    private String transactionType;
    private String description;
    @NotNull
    @NotBlank
    private Double amount;
    @NotNull
    @NotBlank
    private String movementType;
    @NotNull
    @NotBlank
    private Double balance;
    @NotNull
    @NotBlank
    private Double availableBalance;

}
