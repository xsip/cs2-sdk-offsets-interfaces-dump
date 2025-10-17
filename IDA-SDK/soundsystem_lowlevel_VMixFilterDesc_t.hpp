#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_VMixFilterDesc_t {
    soundsystem_lowlevel_VMixFilterType_t m_nFilterType;
    soundsystem_lowlevel_VMixFilterSlope_t m_nFilterSlope;
    bool m_bEnabled;
    float32 m_fldbGain;
    float32 m_flCutoffFreq;
    float32 m_flQ;
};
