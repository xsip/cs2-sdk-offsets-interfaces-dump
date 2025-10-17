#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_LayerDefinition_t {
    int16_t m_nInputNodeIdx;
    int16_t m_nWeightValueNodeIdx;
    int16_t m_nBoneMaskValueNodeIdx;
    int16_t m_nRootMotionWeightValueNodeIdx;
    bool m_bIsSynchronized;
    bool m_bIgnoreEvents;
    bool m_bIsStateMachineLayer;
    animlib_NmPoseBlendMode_t m_blendMode;
};
