package com.logistics.service;
import java.util.List;

import com.logistics.entities.BorrowerVerifyEntity;



public interface BorrowerVerifyInt {
 public List<BorrowerVerifyEntity> getBorrower();
 public BorrowerVerifyEntity postBorrower(BorrowerVerifyEntity bve);
 public BorrowerVerifyEntity putBorrower(BorrowerVerifyEntity bve);
 public void deleteBorrower(int id);
}
