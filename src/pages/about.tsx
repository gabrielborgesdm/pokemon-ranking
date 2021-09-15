import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MainContainerComponent from '../components/MainContainerComponent'
import PokemonAvatar from '../components/PokemonAvatar'
import { CustomBoxRow, CustomContainer } from '../styles/common'
import { FormContainer } from '../styles/pages/account'

export const About: React.FC = () => {
  const { t } = useTranslation('about')
  const { t: c } = useTranslation('common')

  return (
    <div>
      <MainContainerComponent>
            <CustomBoxRow>
              <CustomContainer>
              <FormContainer className="mx-auto" xs={10}>
                <Row>
                  <div className="d-flex flex-column flex-md-row align-items-center">
                    <div>
                      <PokemonAvatar />
                    </div>
                    <div className="ml-10px">
                      <Col xs={12}>
                        <Row>
                          <Col xs={12}>
                            <h3>{c('about')}</h3>
                            <hr />
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12}>
                            <p>
                              {t('about-pokeranking')}&nbsp;

                            </p>
                          </Col>

                        </Row>

                        <Row>
                          <Col xs={12}>
                            <h3>{t('developer')}</h3>
                            <hr />
                          </Col>
                        </Row>

                        <Row>
                          <Col xs={12}>
                            <p>
                              {t('about-developer')}&nbsp;
                              <a href="https://github.com/gabrielborgesdm" className="text-light">{c('click-here-to-have-access-to-it')}</a>
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </div>
                  </div>
                </Row>
                <Row>
                  <Col xs={12}>
                    <h3>{t('repository')}</h3>
                    <hr />
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <p>
                      {t('about-repository')}&nbsp;
                      <a href="https://github.com/gabrielborgesdm/pokeranking" className="text-light">{c('click-here-to-have-access-to-it')}</a>
                    </p>
                  </Col>
                </Row>

              </FormContainer>
        </CustomContainer>
      </CustomBoxRow>
    </MainContainerComponent>
    </div>
  )
}

export default About
