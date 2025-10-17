#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_CSeqAutoLayerFlag.hpp"

class animationsystem_CSeqAutoLayer {
    int16_t m_nLocalReference;
    int16_t m_nLocalPose;
    animationsystem_CSeqAutoLayerFlag m_flags;
    float32 m_start;
    float32 m_peak;
    float32 m_tail;
    float32 m_end;
};
