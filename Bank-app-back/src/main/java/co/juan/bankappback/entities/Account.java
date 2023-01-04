package co.juan.bankappback.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
    private Integer accountNumber;
    @NotNull
    private String state;
    @NotNull
    private Double balance;
    @NotNull
    private Double availableBalance;
    @NotNull
    @NotBlank
    private Boolean gmfExempt;
    @NotNull
    @NotBlank
    private Date creationDate;
    @NotNull
    @NotBlank
    private String userCreation;
    @NotNull
    @NotBlank
    private Date modificationDate;
    @NotNull
    @NotBlank
    private String userModification;
}
