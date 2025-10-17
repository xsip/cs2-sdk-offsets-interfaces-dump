#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimGraphSettingsManager.hpp"
#include "animgraphlib_CAnimNodePath.hpp"

class animgraphlib_CAnimUpdateSharedData {
    char vTable60[0x10];
    char m_nodes[0x18];
    char m_nodeIndexMap[0x20];
    char m_components[0x18];
    char m_pParamListUpdater[0x8];
    char m_pTagManagerUpdater[0x8];
    char m_scriptManager[0x8];
    animgraphlib_CAnimGraphSettingsManager m_settings;
    char m_pStaticPoseCache[0x8];
    char m_pSkeleton[0x8];
    animgraphlib_CAnimNodePath m_rootNodePath;
    char end_pad_61[0x18];
};
