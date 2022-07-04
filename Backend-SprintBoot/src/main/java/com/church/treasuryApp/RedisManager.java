package com.church.treasuryApp;
import redis.clients.jedis.Jedis;

public class RedisManager {
	
	private Jedis jedis;
	
	public boolean setRedisConnection() throws Exception {
		try {
			jedis = new Jedis("127.0.0.1", 6379);
		    jedis.auth("chandan1997");
		    System.out.println("Connected to Redis");		    
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
	    return true;
	}
	
	public void setValue(String key, String value) {
		jedis.set(key, value);
	}
	
	public String getValue(String key) {
		return jedis.get(key);
	}
}
