import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Grid, Row, Col, Well, FormGroup, Checkbox } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { ControlLabel, FormControl } from 'react-bootstrap';

const navbarInstance = (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">따닥 시간표</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={1} title="수업선택" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}>전공과목</MenuItem>
          <MenuItem eventKey={1.2}>교양필수</MenuItem>
          <MenuItem eventKey={1.3}>교양선택</MenuItem>
          <MenuItem eventKey={1.4}>PTU교양</MenuItem>
        </NavDropdown>
        <NavItem eventKey={2} href="#">시간표</NavItem>
        <NavItem eventKey={3} href="#">강의평가</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
const gridInstance = (
  <Grid>
    <Row className="show-grid">
      <Col sm={3}>
        {
          <Well>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>요일선택</ControlLabel> <hr/>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">전체</option>
                  <option value="other">월</option>
                  <option value="other">화</option>
                  <option value="other">수</option>
                  <option value="other">목</option>
                  <option value="other">금</option>
                </FormControl>
              </FormGroup>
        </Well>
      }
        {
          <Well>
            <FormGroup controlId="formControlsSelectMultiple">
              <ControlLabel>시간선택</ControlLabel> <hr/>
              <FormControl componentClass="select" multiple>
                <option value="select">1</option>
                <option value="other">2</option>
                <option value="other">3</option>
                <option value="other">4</option>
                <option value="other">5</option>
                <option value="other">6</option>
                <option value="other">7</option>
              </FormControl>
            </FormGroup>
          </Well>
        }
      </Col>
      <Col sm={9}>{
          <Well>
            <Table responsive>
              <thead>
                <tr>
                  <th>학수번호</th>
                  <th>이수구분</th>
                  <th>과목명</th>
                  <th>교수명</th>
                  <th>학년</th>
                  <th>요일</th>
                  <th>시간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1234-12</td>
                  <td>전필</td>
                  <td>캡스톤 디자인1</td>
                  <td>양단희</td>
                  <td>4</td>
                  <td>수</td>
                  <td>7,8,9</td>
                </tr>
                <tr>
                  <td>2345-23</td>
                  <td>전선</td>
                  <td>프로젝트1</td>
                  <td>윤석규</td>
                  <td>4</td>
                  <td>월</td>
                  <td>2,3,4</td>
                </tr>
                <tr>
                  <td>3456-34</td>
                  <td>전선</td>
                  <td>비주얼언어I</td>
                  <td>조영희</td>
                  <td>4</td>
                  <td>목</td>
                  <td>6,7,8</td>
                </tr>
              </tbody>
            </Table>
          </Well>
        }
      </Col>
    </Row>
  </Grid>
);
const asdf = (
  <div>{navbarInstance}, {gridInstance}</div>
)

ReactDOM.render(asdf, document.getElementById('root'));
