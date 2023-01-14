package co.juan.bankappback.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Date;
@Entity
@Data
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    private String accountType;
    @NotNull
    @Column(unique = true)
    private String accountNumber;
    @NotNull
    private Boolean state;
    @NotNull
    private Double balance;
    @NotNull
    private Double availableBalance;
    @NotNull
    private Boolean gmfExempt;
    @NotNull
    @NotEmpty
    private String idOwner;
    @NotNull
    private Date creationDate;
    @NotNull
    private String userCreation;
    @NotNull
    private Date modificationDate;
    @NotNull
    private String userModification;
}
