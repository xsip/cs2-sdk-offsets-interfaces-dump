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
    char end_pad_3997[0x88];
};
