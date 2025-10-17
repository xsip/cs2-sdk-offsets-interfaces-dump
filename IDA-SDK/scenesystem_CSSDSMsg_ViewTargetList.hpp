#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "scenesystem_SceneViewId_t.hpp"

class scenesystem_CSSDSMsg_ViewTargetList {
    scenesystem_SceneViewId_t m_viewId;
    CUtlString m_ViewName;
    char m_Targets[0x18];
};
