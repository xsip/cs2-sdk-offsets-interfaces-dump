#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CModelConfigList {
    bool m_bHideMaterialGroupInTools;
    bool m_bHideRenderColorInTools;
    char pad_390[0x6];
    char m_Configs[0x18];
};
