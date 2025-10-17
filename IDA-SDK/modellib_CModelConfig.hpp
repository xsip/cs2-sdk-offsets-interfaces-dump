#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CModelConfig {
    CUtlString m_ConfigName;
    char m_Elements[0x18];
    bool m_bTopLevel;
    bool m_bActiveInEditorByDefault;
    char end_pad_340[0x6];
};
