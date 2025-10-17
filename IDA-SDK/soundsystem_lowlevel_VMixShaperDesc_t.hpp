#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_VMixShaperDesc_t {
    int32_t m_nShape;
    float32 m_fldbDrive;
    float32 m_fldbOutputGain;
    float32 m_flWetMix;
    int32_t m_nOversampleFactor;
};
