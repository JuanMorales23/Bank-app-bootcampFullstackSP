package co.juan.bankappback.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;


import java.util.Date;

@Entity
@Data
@Table(name = "clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    @NotBlank
    private String idType;
    @NotNull
    @NotBlank
    private Integer idNumber;
    @NotNull
    @NotBlank
    private String firstName;
    private String middleName;
    @NotNull
    @NotBlank
    private String lastName;
    @NotNull
    private String email;
    private Date birthDate;
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
