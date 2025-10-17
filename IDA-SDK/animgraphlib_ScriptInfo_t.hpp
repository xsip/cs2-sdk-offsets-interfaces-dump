#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_ScriptInfo_t {
    CUtlString m_code;
    char m_paramsModified[0x18];
    char m_proxyReadParams[0x18];
    char m_proxyWriteParams[0x18];
    animgraphlib_AnimScriptType m_eScriptType;
    char end_pad_276[0x6];
};
