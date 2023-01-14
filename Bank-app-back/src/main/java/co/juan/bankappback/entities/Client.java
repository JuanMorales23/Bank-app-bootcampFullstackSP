package co.juan.bankappback.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;


import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    private String idType;
    @NotNull
    @Column(unique = true, name = "id_number")
    private String idNumber;
    @NotNull
    private String firstName;
    private String middleName;
    @NotNull
    private String lastName;
    @NotNull
    private String secondLastName;
    @NotNull
    @Column(unique = true)
    private String email;
    private Date birthDate;
    @NotNull
    private Date creationDate;
    @NotNull
    private String userCreation;
    @NotNull
    private Date modificationDate;
    @NotNull
    private String userModification;

}
