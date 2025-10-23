#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_C_RetakeGameRules {
    char vTable1537[0xf8];
    int32_t m_nMatchSeed;
    bool m_bBlockersPresent;
    bool m_bRoundInProgress;
    char pad_1538[0x2];
    int32_t m_iFirstSecondHalfRound;
    int32_t m_iBombSite;
    char m_hBombPlanter[0x4];
    char end_pad_1539[0xc];
};
