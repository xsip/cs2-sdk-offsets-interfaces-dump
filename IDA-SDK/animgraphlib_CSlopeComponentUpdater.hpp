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

class animgraphlib_CSlopeComponentUpdater {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    CUtlString m_name;
    modellib_AnimComponentID m_id;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    bool m_bStartEnabled;
    char end_pad_11[0x7];
    char __vftable_pad[4];
    float32 m_flTraceDistance;
    animgraphlib_CAnimParamHandle m_hSlopeAngle;
    animgraphlib_CAnimParamHandle m_hSlopeAngleFront;
    animgraphlib_CAnimParamHandle m_hSlopeAngleSide;
    animgraphlib_CAnimParamHandle m_hSlopeHeading;
    animgraphlib_CAnimParamHandle m_hSlopeNormal;
    animgraphlib_CAnimParamHandle m_hSlopeNormal_WorldSpace;
    char end_pad_223[0x4];
};
