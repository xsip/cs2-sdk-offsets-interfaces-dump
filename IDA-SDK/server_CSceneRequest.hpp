#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_SceneRequestHandle_t.hpp"

class server_CSceneRequest {
    CUtlSymbolLarge m_szPayloadTypeName;
    server_SceneRequestHandle_t m_uHandle;
    server_ESceneRequestState_t m_state;
    char end_pad_2858[0x10];
};
