#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_FootPinningPoseOpFixedData_t.hpp"

class animgraphlib_CFootPinningUpdateNode {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    void **__vftable_3;
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    void **__vftable_4;
    animgraphlib_FootPinningPoseOpFixedData_t m_poseOpFixedData;
    animgraphlib_FootPinningTimingSource m_eTimingSource;
    char pad_144[0x4];
    char m_params[0x18];
    bool m_bResetChild;
    char end_pad_145[0x7];
};
