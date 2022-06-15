import Card from "react-bootstrap/Card";

import styles from './front.module.scss';

const Front = () => {
  const tournamentDates = 'August 12-14, 2022';

  return (
    <Card className={styles.Front}>
      <Card.Header>
        <Card.Title>
          {tournamentDates}
        </Card.Title>
        <Card.Subtitle className="text-muted">
          Plano, TX
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <div>
          <img className="float-end img-fluid col-5 col-sm-3 ps-1"
               src="/images/logo.jpg"
               alt="Big D Classic logo"
          />
        </div>
        <Card.Text>
          In a tradition dating back very nearly to the 20th century, bowlers from all around the country descend
          upon north Texas in the middle of August to beat the heat and engage in a little friendly competition,
          all while raising money for a good cause.
        </Card.Text>
        <hr />
        <div>
          <a href={'https://www.cfa.lgbt/'}
             target={'_new'}
          >
            <img className={`float-start ${styles.BeneficiaryLogo}`}
                 src={'/images/cfa.jpg'}
                 alt={'Coalition for Aging LGBT Logo'}
            />
          </a>
          <Card.Text>
            This year, our tournament is raising funds for the{' '}
            <a href={'https://www.cfa.lgbt/'}
              target={'_new'}>
              Coalition for Aging LGBT
            </a>
            . Their mission is to improve and protect the quality of life of older LGBT adults in North Texas through coordination and collaborations for health, housing, advocacy, financial security and social services.
          </Card.Text>
          <Card.Text>
            Volunteers from this organization will be at the tournament selling raffle tickets and raising awareness, so be sure to bring plenty of cash and support them!
          </Card.Text>
          <Card.Text>
            <a href={'https://www.cfa.lgbt/'}
               target={"_new"}>
              Learn more
            </a>
          </Card.Text>
        </div>
        <hr />
        <Card.Text>
          Registration is open, and spots are filling up fast! The deadline is August 3, so what are you waiting for?
        </Card.Text>
        <Card.Text className={'text-center'}>
          <a href="https://www.igbo-reg.com/tournaments/big-d-classic-2022"
             className="btn btn-primary">
            Register Online
            {' '}<i className="bi bi-arrow-right" aria-hidden={true}/>
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Front;