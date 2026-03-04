#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_AnimationDecodeDebugDumpElement_t.hpp"

class animationsystem_AnimationSnapshotBase_t {
    float32 m_flRealTime;
    char pad_416[0xc];
    matrix3x4a_t m_rootToWorld;
    bool m_bBonesInWorldSpace;
    char pad_417[0x7];
    char m_boneSetupMask[0x18];
    char m_boneTransforms[0x18];
    char m_flexControllers[0x18];
    animationsystem_AnimationSnapshotType_t m_SnapshotType;
    bool m_bHasDecodeDump;
    char pad_418[0x3];
    animationsystem_AnimationDecodeDebugDumpElement_t m_DecodeDump;
    char end_pad_419[0x8];
};
