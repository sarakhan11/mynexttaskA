import React from "react";
import Link from "next/link";
import Router from "next/router";
export default function index() {
  return (
    <>
        <div className="flex items-center justify-center gap-x-4">
            <div
            onClick={() => Router.push("/")}
            className="cursor-pointer font-bold"
            >
            Page 1
          </div>
          </div>
 </>
);
}