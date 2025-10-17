#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class C_RetakeGameRules {
    char _vtable_pad_976[0xf8];
    int32_t m_nMatchSeed;
    bool m_bBlockersPresent;
    bool m_bRoundInProgress;
    char pad_977[0x2];
    int32_t m_iFirstSecondHalfRound;
    int32_t m_iBombSite;
    char end_pad_978[0x10];
};
