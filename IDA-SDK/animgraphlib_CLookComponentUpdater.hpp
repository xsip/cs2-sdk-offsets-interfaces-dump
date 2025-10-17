#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimComponentID.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CLookComponentUpdater {
    char vTable10[0x18];
    CUtlString m_name;
    modellib_AnimComponentID m_id;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    bool m_bStartEnabled;
    char end_pad_11[0x7];
    char vTable171[0x4];
    animgraphlib_CAnimParamHandle m_hLookHeading;
    animgraphlib_CAnimParamHandle m_hLookHeadingNormalized;
    animgraphlib_CAnimParamHandle m_hLookHeadingVelocity;
    animgraphlib_CAnimParamHandle m_hLookPitch;
    animgraphlib_CAnimParamHandle m_hLookDistance;
    animgraphlib_CAnimParamHandle m_hLookDirection;
    animgraphlib_CAnimParamHandle m_hLookTarget;
    animgraphlib_CAnimParamHandle m_hLookTargetWorldSpace;
    bool m_bNetworkLookTarget;
    char end_pad_172[0x3];
};
