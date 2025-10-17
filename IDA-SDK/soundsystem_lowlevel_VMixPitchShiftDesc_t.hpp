#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_VMixPitchShiftDesc_t {
    int32_t m_nGrainSampleCount;
    float32 m_flPitchShift;
    int32_t m_nQuality;
    int32_t m_nProcType;
};
