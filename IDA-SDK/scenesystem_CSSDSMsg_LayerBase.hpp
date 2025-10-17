#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "scenesystem_SceneViewId_t.hpp"

class scenesystem_CSSDSMsg_LayerBase {
    scenesystem_SceneViewId_t m_viewId;
    CUtlString m_ViewName;
    uint64_t m_nLayerId;
    CUtlString m_LayerName;
    CUtlString m_displayText;
};
