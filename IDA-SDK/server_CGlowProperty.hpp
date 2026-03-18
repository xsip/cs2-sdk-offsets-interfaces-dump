#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CGlowProperty {
    void **__vftable_0;
    Vector m_fGlowColor;
    char pad_3791[0x1c];
    int32_t m_iGlowType;
    int32_t m_iGlowTeam;
    int32_t m_nGlowRange;
    int32_t m_nGlowRangeMin;
    Color m_glowColorOverride;
    bool m_bFlashing;
    char pad_3792[0x3];
    float32 m_flGlowTime;
    float32 m_flGlowStartTime;
    bool m_bEligibleForScreenHighlight;
    bool m_bGlowing;
    char end_pad_3793[0x6];
};
