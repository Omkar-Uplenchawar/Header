import React from "react";
import "../styles/Header.css";

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
              <img src="../icons/open_inspection.png" alt="" />
              <div>Open Inspection</div>
            </a>
          </li>
          <li>
            <a href="#edit">
              <img src="../icons/save_inspection.png" alt="" />
              <div>Save Inspection</div>
            </a>
          </li>
          <hr />
          <li>
            <a href="#internet">
              <img src="../icons/open_template.png" alt="" />
              <div>Open Template</div>
            </a>
          </li>
          <li>
            <a href="#report-settings">
              <img src="../icons/save_template.png" alt="" />
              <div>Save Template</div>
            </a>
          </li>
          <hr />
          <li>
            <a href="#">
              <img src="../icons/edit_comments.png" alt="" />
              <div>Edit Comments</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../icons/edit_template.png" alt="" />
              <div>Edit Template</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../icons/pdf.png" alt="" />
              <div>Insert pdf Documments</div>
            </a>
          </li>
          <hr />
          <li>
            <a href="#">
              <img src="../icons/client_info.png" alt="" />
              <div>Client Info</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../icons/contract_page.png" alt="" />
              <div>Contact Page</div>
            </a>
          </li>
          <hr />
          <li>
            <a href="#">
              <img src="../icons/copy.png" alt="" />
              <div>Copy</div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../icons/paste.png" alt="" />
              <div>Paste</div>
            </a>
          </li>
          <hr />
          <li>
            <a href="#">
              <img src="../icons/generate_report.png" alt="" /> <div>Geneate report</div>
            </a>
          </li>
          <hr />
          <li>
            <a href="#">
              {" "}
              <img src="../icons/upload_report.png" alt="" /> <div>Upload report</div>
            </a>
          </li>
          <hr />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
