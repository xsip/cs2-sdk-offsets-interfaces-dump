#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_CNmTarget.hpp"

class animlib_CNmChainSolverTask {
    char pad_1007[0x50];
    int32_t m_nEffectorBoneIdx;
    int32_t m_nEffectorTargetBoneIdx;
    char pad_1729[0x8];
    CTransform m_targetTransform;
    int32_t m_nNumBonesInChain;
    char pad_1730[0xc];
    animlib_CNmTarget m_effectorTarget;
    animlib_NmIKBlendMode_t m_blendMode;
    char pad_1731[0x3];
    float32 m_flBlendWeight;
    bool m_bIsTargetInWorldSpace;
    bool m_bIsRunningFromDeserializedData;
    char pad_1732[0x6];
    CGlobalSymbol m_debugEffectorBoneID;
    char pad_1733[0x8];
    CTransform m_chainStartTransformMS;
    CTransform m_debugRequestedTargetTransformMS;
    float32 m_debugTotalChainLength;
    char end_pad_1734[0xc];
};
