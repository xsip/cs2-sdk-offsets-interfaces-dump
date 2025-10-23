#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_VMixDynamicsBand_t {
    float32 m_fldbGainInput;
    float32 m_fldbGainOutput;
    float32 m_fldbThresholdBelow;
    float32 m_fldbThresholdAbove;
    float32 m_flRatioBelow;
    float32 m_flRatioAbove;
    float32 m_flAttackTimeMS;
    float32 m_flReleaseTimeMS;
    bool m_bEnable;
    bool m_bSolo;
    char end_pad_2461[0x2];
};
