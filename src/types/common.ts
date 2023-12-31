export interface IMeta {
  limit: number;
  page: number;
  size: number;
  total: number;
}
export type ResponseSuccessType = {
  data: any;
  // meta?: IMeta;
};
export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export interface IDepartment {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Name {
  firstName: string;
  lastName: string;
  middleName: string;
}

export interface IAdmin {
  id: string;
  fullName: string;
  gender: string;

  email: string;
  contactNo: string;

  address: string;

  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IAcademicFaculty {
  id: string;
  syncId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAcademicDepartment {
  id: string;
  syncId: string;
  title: string;
  academicFaculty: IAcademicFaculty;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IAcademicSemester {
  id: string;
  title: string;
  year: number;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IFaculty {
  id: string;

  firstName: string;
  middleName: string;
  lastName: string;

  gender: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  dateOfBirth: string;
  bloodGroup: string;
  academicFaculty: string;
  academicDepartment: string;
  designation: string;
  presentAddress: string;
  permanentAddress: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
