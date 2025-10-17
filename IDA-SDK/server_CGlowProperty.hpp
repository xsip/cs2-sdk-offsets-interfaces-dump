#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CGlowProperty {
    char vTable3661[0x8];
    Vector m_fGlowColor;
    char pad_3662[0x1c];
    int32_t m_iGlowType;
    int32_t m_iGlowTeam;
    int32_t m_nGlowRange;
    int32_t m_nGlowRangeMin;
    Color m_glowColorOverride;
    bool m_bFlashing;
    char pad_3663[0x3];
    float32 m_flGlowTime;
    float32 m_flGlowStartTime;
    bool m_bEligibleForScreenHighlight;
    bool m_bGlowing;
    char end_pad_3664[0x6];
};
