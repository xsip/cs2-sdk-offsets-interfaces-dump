#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_CNmTarget.hpp"

class animlib_CNmTwoBoneIKTask {
    char pad_1818[0x58];
    int32_t m_nEffectorBoneIdx;
    int32_t m_nEffectorTargetBoneIdx;
    CTransform m_targetTransform;
    animlib_CNmTarget m_effectorTarget;
    animlib_NmIKBlendMode_t m_blendMode;
    char pad_2552[0x3];
    float32 m_flBlendWeight;
    bool m_bIsTargetInWorldSpace;
    bool m_bIsRunningFromDeserializedData;
    char pad_2553[0x2];
    float32 m_flReferencePoseTwistWeight;
    CGlobalSymbol m_debugEffectorBoneID;
    char end_pad_2554[0x8];
};
