#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimComponentID.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CMovementComponentUpdater {
    char vTable10[0x18];
    CUtlString m_name;
    modellib_AnimComponentID m_id;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    bool m_bStartEnabled;
    char end_pad_11[0x7];
    char m_motors[0x18];
    animgraphlib_CAnimInputDamping m_facingDamping;
    char pad_190[0x8];
    int32_t m_nDefaultMotorIndex;
    float32 m_flDefaultRunSpeed;
    bool m_bMoveVarsDisabled;
    bool m_bNetworkPath;
    bool m_bNetworkFacing;
    animgraphlib_CAnimParamHandle m_paramHandles[34];
};
