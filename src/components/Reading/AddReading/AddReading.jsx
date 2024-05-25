import { TitleForm } from '../../TitleForm/TitleForm';
import { Form } from './AddReading.styled';
import { BtnSbmt } from '../../Btn/BtnSbmt';

export const AddReading = ({ startStop, page, setPage, handleSubmit }) => {
  const handlePageChange = ({ target: { value } }) => {
    setPage(value);
  };

  return (
    <div>
      <TitleForm text={'Start page:'} />
      <Form onSubmit={handleSubmit}>
        <div className="inptWrapper">
          <p className="desc">Page number:</p>
          <input
            className="inptForm"
            type="text"
            placeholder="0"
            value={page}
            onChange={handlePageChange}
            required
          />
        </div>
        {startStop ? (
          <BtnSbmt text={'To start'} />
        ) : (
          <BtnSbmt text={'To stop'} />
        )}
      </Form>
    </div>
  );
};
