#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmChainLookatTask {
    char pad_1819[0x58];
    int32_t m_nChainEndBoneIdx;
    int32_t m_nNumBonesInChain;
    Vector m_chainForwardDir;
    float32 m_flBlendWeight;
    float32 m_flHorizontalAngleLimitDegrees;
    float32 m_flVerticalAngleLimitDegrees;
    Vector m_lookatTarget;
    bool m_bIsTargetInWorldSpace;
    bool m_bIsRunningFromDeserializedData;
    char pad_2501[0x2];
    float32 m_flHorizontalAngleDegrees;
    float32 m_flVerticalAngleDegrees;
};
