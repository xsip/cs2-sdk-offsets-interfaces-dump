#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_C_RetakeGameRules {
    char vTable1538[0xf8];
    int32_t m_nMatchSeed;
    bool m_bBlockersPresent;
    bool m_bRoundInProgress;
    char pad_1539[0x2];
    int32_t m_iFirstSecondHalfRound;
    int32_t m_iBombSite;
    char end_pad_1540[0x10];
};
