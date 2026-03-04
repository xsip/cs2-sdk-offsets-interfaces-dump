#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"

class animgraphlib_COrientationWarpUpdateNode {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    void **__vftable_3;
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    char __vftable_pad[4];
    animgraphlib_OrientationWarpMode_t m_eMode;
    animgraphlib_CAnimParamHandle m_hTargetParam;
    animgraphlib_CAnimParamHandle m_hTargetPositionParam;
    animgraphlib_CAnimParamHandle m_hFallbackTargetPositionParam;
    char pad_196[0x2];
    animgraphlib_OrientationWarpTargetOffsetMode_t m_eTargetOffsetMode;
    float32 m_flTargetOffset;
    animgraphlib_CAnimParamHandle m_hTargetOffsetParam;
    char pad_197[0x6];
    animgraphlib_CAnimInputDamping m_damping;
    animgraphlib_OrientationWarpRootMotionSource_t m_eRootMotionSource;
    float32 m_flMaxRootMotionScale;
    bool m_bEnablePreferredRotationDirection;
    char pad_198[0x3];
    animgraphlib_AnimValueSource m_ePreferredRotationDirection;
    float32 m_flPreferredRotationThreshold;
    char end_pad_199[0x4];
};
