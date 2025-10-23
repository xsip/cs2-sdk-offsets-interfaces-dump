#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CRetakeGameRules {
    char vTable3995[0xf8];
    int32_t m_nMatchSeed;
    bool m_bBlockersPresent;
    bool m_bRoundInProgress;
    char pad_3996[0x2];
    int32_t m_iFirstSecondHalfRound;
    int32_t m_iBombSite;
    char m_hBombPlanter[0x4];
    char end_pad_3997[0xa4];
};
