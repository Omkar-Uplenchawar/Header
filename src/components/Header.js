import React from "react";
import "../styles/Header.css"; // Import the CSS file for styling\
import { GiOpenFolder } from "react-icons/gi";
import {
  FaSave,
  FaFilePdf,
  FaCopy,
  FaPaste,
  FaFileUpload,
} from "react-icons/fa";
import { MdOutlineSave, MdEditNote, MdEditDocument } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { BsFilePerson } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <a href="#file">File</a>
          </li>
          <li>
            <a href="#edit">Edit</a>
          </li>
          <li>
            <a href="#internet">Internet</a>
          </li>
          <li>
            <a href="#report-settings">Report Settings</a>
          </li>
          <li>
            <a href="#photos">Photos</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
      <hr />
      <nav>
        <ul>
          <li>
            <a href="#file">
              <GiOpenFolder className="icons" />
              <div>Open Inspection</div>
            </a>
          </li>
          <li>
            <a href="#edit">
              <FaSave className="icons" />
              <div>Save Inspection</div>
            </a>
          </li>
          <hr />
          <li>
            <a href="#internet">
              <HiTemplate className="icons" />
              <div>Open Template</div>
            </a>
          </li>
          <li>
            <a href="#report-settings">
              <MdOutlineSave className="icons" />
              <div>Save Template</div>
            </a>
          </li>
          <hr />
          <li>
            <a href="#">
              <MdEditNote className="icons" />
              <div>Edit Comments</div>
            </a>
          </li>
          <li>
            <a href="#">
              <MdEditDocument className="icons" />
              <div>Edit Template</div>
            </a>
          </li>
          <li>
            <a href="#">
              <FaFilePdf className="icons" />
              <div>Insert pdf Documments</div>
            </a>
          </li>
          <hr />
          <li>
            <a href="#">
              <BsFilePerson className="icons" />
              <div>Client Info</div>
            </a>
          </li>
          <li>
            <a href="#">
              <FaBook className="icons" />
              <div>Contact Page</div>
            </a>
          </li>
          <hr />
          <li>
            <a href="#">
              <FaCopy className="icons" />
              <div>Copy</div>
            </a>
          </li>
          <li>
            <a href="#">
              <FaPaste className="icons" />
              <div>Paste</div>
            </a>
          </li>
          <hr />
          <li>
            <a href="#">
              <TbReportSearch className="icons" /> <div>Geneate report</div>
            </a>
          </li>
          <hr />
          <li>
            <a href="#">
              {" "}
              <FaFileUpload className="icons" /> <div>Upload report</div>
            </a>
          </li>
          <hr />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
