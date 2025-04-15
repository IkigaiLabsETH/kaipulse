'use client'

import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const StyledVideo = styled('video')({
  width: '100%',
  maxWidth: '1200px',
  marginBottom: '2rem',
  borderRadius: '12px',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  backgroundColor: 'rgba(24, 24, 27, 0.5)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(234, 179, 8, 0.2)',
}));

const HighlightedProduct = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  backgroundColor: 'rgba(24, 24, 27, 0.7)',
  border: '2px solid rgba(234, 179, 8, 0.4)',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(24, 24, 27, 0.9)',
    border: '2px solid rgba(234, 179, 8, 0.6)',
  },
}));

const BitwisePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4, color: '#eab308', fontFamily: 'Epilogue' }}>
          Bitwise Investment Funds
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <StyledVideo controls autoPlay muted>
            <source src="/bitwise.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </Box>

        {/* Highlighted Products */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#eab308', fontFamily: 'Epilogue', mb: 4 }}>
            Featured Products
          </Typography>
          
          <HighlightedProduct>
            <Typography variant="h6" sx={{ color: '#eab308', fontFamily: 'Epilogue', mb: 2 }}>
              BITB
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Satoshi' }}>
              Bitwise Bitcoin ETF
            </Typography>
            <Link href="https://bitbetf.com/" target="_blank" rel="noopener noreferrer">
              <Typography variant="body2" sx={{ color: '#eab308', mt: 2, fontFamily: 'Satoshi' }}>
                Learn More →
              </Typography>
            </Link>
          </HighlightedProduct>

          <HighlightedProduct>
            <Typography variant="h6" sx={{ color: '#eab308', fontFamily: 'Epilogue', mb: 2 }}>
              IMST
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Satoshi' }}>
              Bitwise MSTR Option Income Strategy ETF
            </Typography>
            <Link href="https://imstetf.com/" target="_blank" rel="noopener noreferrer">
              <Typography variant="body2" sx={{ color: '#eab308', mt: 2, fontFamily: 'Satoshi' }}>
                Learn More →
              </Typography>
            </Link>
          </HighlightedProduct>

          <HighlightedProduct>
            <Typography variant="h6" sx={{ color: '#eab308', fontFamily: 'Epilogue', mb: 2 }}>
              OWNB
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Satoshi' }}>
              Bitwise Bitcoin Standard Corporations ETF
            </Typography>
            <Link href="https://ownbetf.com/" target="_blank" rel="noopener noreferrer">
              <Typography variant="body2" sx={{ color: '#eab308', mt: 2, fontFamily: 'Satoshi' }}>
                Learn More →
              </Typography>
            </Link>
          </HighlightedProduct>
        </Box>

        {/* Important Disclosures */}
        <StyledPaper elevation={3}>
          <Typography variant="h5" gutterBottom sx={{ color: '#eab308', fontFamily: 'Epilogue' }}>
            Important Disclosures
          </Typography>
          <Typography variant="body2" paragraph sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Satoshi', fontStyle: 'italic' }}>
            OWNB, BTOP, BITC, BITQ, AETH, and BWEB do not invest directly in crypto assets, including bitcoin and ether.
          </Typography>
          <Typography variant="body2" paragraph sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Satoshi', fontStyle: 'italic' }}>
            BITB and ETHW are exchange-traded products that are not registered under the Investment Company Act of 1940 (the &quot;1940 Act&quot;) and therefore are not subject to the same regulations as mutual funds or ETFs registered under the 1940 Act. BITB and ETHW are not suitable for all investors. An investment in BITB or ETHW is subject to a high degree of risk, has the potential for significant volatility, and could result in significant or complete loss of investment. An investment in either Fund is not a direct investment in bitcoin or ether.
          </Typography>
          <Typography variant="body2" paragraph sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Satoshi' }}>
            Past performance does not predict future results. Investment involves risk. The value of investments may go down as well as up and investors may not get back the full amount invested.
          </Typography>
        </StyledPaper>
      </Container>
    </div>
  );
};

export default BitwisePage; 