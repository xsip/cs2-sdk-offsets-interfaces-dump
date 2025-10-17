#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CMotionSearchDB.hpp"
#include "modellib_AnimScriptHandle.hpp"

class animgraphlib_CMotionGraphGroup {
    animgraphlib_CMotionSearchDB m_searchDB;
    char m_motionGraphs[0x18];
    char m_motionGraphConfigs[0x18];
    char m_sampleToConfig[0x18];
    modellib_AnimScriptHandle m_hIsActiveScript;
    char end_pad_176[0x4];
};
