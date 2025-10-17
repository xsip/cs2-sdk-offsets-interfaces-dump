#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_CSeqMultiFetchFlag.hpp"

class animationsystem_CSeqMultiFetch {
    animationsystem_CSeqMultiFetchFlag m_flags;
    char pad_447[0x2];
    char m_localReferenceArray[0x18];
    int32_t m_nGroupSize[2];
    int32_t m_nLocalPose[2];
    char m_poseKeyArray0[0x18];
    char m_poseKeyArray1[0x18];
    int32_t m_nLocalCyclePoseParameter;
    bool m_bCalculatePoseParameters;
    bool m_bFixedBlendWeight;
    char pad_448[0x2];
    float32 m_flFixedBlendWeightVals[2];
};
