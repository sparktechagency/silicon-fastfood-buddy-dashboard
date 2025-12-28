"use client";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Info, Lock, Unlock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";
import UsersDetailsModal from "../modal/UsersDetailsModal";
import dayjs from "dayjs";

const data = [
  {
    id: 1,
    name: "Dulce Rohman",
    contact: "+1234567890",
    email: "user@email.com",
    date: "12/21/2023",
    gender: "Male",
    address: "California, USA",
    status: "Active",
  },
  {
    id: 2,
    name: "Dulce Rohman",
    contact: "+1234567890",
    email: "user@email.com",
    date: "12/21/2023",
    gender: "Male",
    address: "California, USA",
    status: "Inactive",
  },
];

export default function Users({ data }: any) {
  const [status, setStatus] = useState([1, 2]);

  const hanldeLock = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to block this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      customClass: {
        confirmButton: "swal-btn",
        cancelButton: "swal-btn",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const isActive = status.includes(id);
        if (isActive) {
          setStatus(status.filter((item) => item !== id));
        } else {
          setStatus([...status, id]);
        }
        Swal.fire({
          title: "Blocked!",
          text: "Your file has been blocked.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <Table className="mt-7">
        <TableHeader>
          <TableRow>
            <TableHead>S.No</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>

            <TableHead>Email</TableHead>
            <TableHead>Reg. Date</TableHead>

            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: any) => (
            <TableRow key={item?._id}>
              <TableCell>#{item?._id.slice(0, 6)}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.image}`}
                  alt="Logo"
                  width={10}
                  height={10}
                  className="w-10 h-10 rounded-full"
                />
              </TableCell>

              <TableCell>{item.name}</TableCell>

              <TableCell>{item.email}</TableCell>
              <TableCell>{dayjs(item.date).format("YYYY-MM-DD")}</TableCell>

              <TableCell>
                <Badge
                  className={`text-md w-20 ${
                    item.status === "Active" ? "bg-[#008F37]" : "bg-[#F48201] "
                  }`}
                >
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell className="pl-">
                <div className="flex items-center  space-x-2">
                  <div>
                    <UsersDetailsModal
                      item={item?._id}
                      trigger={
                        <div className="text-red-400 cursor-pointer mt-2">
                          <Info />
                        </div>
                      }
                    />
                  </div>

                  <div>
                    {status.includes(item.id) ? (
                      <Lock
                        className="text-red-400 cursor-pointer"
                        onClick={() => hanldeLock(item.id)}
                      />
                    ) : (
                      <Unlock
                        className="cursor-pointer"
                        onClick={() => hanldeLock(item.id)}
                      />
                    )}
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
